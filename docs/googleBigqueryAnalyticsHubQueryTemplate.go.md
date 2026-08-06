# `googleBigqueryAnalyticsHubQueryTemplate` Submodule <a name="`googleBigqueryAnalyticsHubQueryTemplate` Submodule" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubQueryTemplate <a name="GoogleBigqueryAnalyticsHubQueryTemplate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template google_bigquery_analytics_hub_query_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

googlebigqueryanalyticshubquerytemplate.NewGoogleBigqueryAnalyticsHubQueryTemplate(scope Construct, id *string, config GoogleBigqueryAnalyticsHubQueryTemplateConfig) GoogleBigqueryAnalyticsHubQueryTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig">GoogleBigqueryAnalyticsHubQueryTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig">GoogleBigqueryAnalyticsHubQueryTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine">PutRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetRoutine">ResetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetSubmit">ResetSubmit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutine` <a name="PutRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine"></a>

```go
func PutRoutine(value GoogleBigqueryAnalyticsHubQueryTemplateRoutine)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigqueryAnalyticsHubQueryTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDocumentation"></a>

```go
func ResetDocumentation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetPrimaryContact"></a>

```go
func ResetPrimaryContact()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetRoutine"></a>

```go
func ResetRoutine()
```

##### `ResetSubmit` <a name="ResetSubmit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetSubmit"></a>

```go
func ResetSubmit()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

googlebigqueryanalyticshubquerytemplate.GoogleBigqueryAnalyticsHubQueryTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

googlebigqueryanalyticshubquerytemplate.GoogleBigqueryAnalyticsHubQueryTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

googlebigqueryanalyticshubquerytemplate.GoogleBigqueryAnalyticsHubQueryTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

googlebigqueryanalyticshubquerytemplate.GoogleBigqueryAnalyticsHubQueryTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubQueryTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigqueryAnalyticsHubQueryTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubQueryTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routine">Routine</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentationInput">DocumentationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContactInput">PrimaryContactInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput">QueryTemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routineInput">RoutineInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submitInput">SubmitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentation">Documentation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateId">QueryTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submit">Submit</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routine"></a>

```go
func Routine() GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput"></a>

```go
func DataExchangeIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentationInput"></a>

```go
func DocumentationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContactInput"></a>

```go
func PrimaryContactInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QueryTemplateIdInput`<sup>Optional</sup> <a name="QueryTemplateIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput"></a>

```go
func QueryTemplateIdInput() *string
```

- *Type:* *string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routineInput"></a>

```go
func RoutineInput() GoogleBigqueryAnalyticsHubQueryTemplateRoutine
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `SubmitInput`<sup>Optional</sup> <a name="SubmitInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submitInput"></a>

```go
func SubmitInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeId"></a>

```go
func DataExchangeId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentation"></a>

```go
func Documentation() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContact"></a>

```go
func PrimaryContact() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `QueryTemplateId`<sup>Required</sup> <a name="QueryTemplateId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateId"></a>

```go
func QueryTemplateId() *string
```

- *Type:* *string

---

##### `Submit`<sup>Required</sup> <a name="Submit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submit"></a>

```go
func Submit() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubQueryTemplateConfig <a name="GoogleBigqueryAnalyticsHubQueryTemplateConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

&googlebigqueryanalyticshubquerytemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataExchangeId: *string,
	DisplayName: *string,
	Location: *string,
	QueryTemplateId: *string,
	DeletionPolicy: *string,
	Description: *string,
	Documentation: *string,
	Id: *string,
	PrimaryContact: *string,
	Project: *string,
	Routine: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine,
	Submit: interface{},
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>*string</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human-readable display name of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.location">Location</a></code> | <code>*string</code> | The name of the location this data exchange query template. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId">QueryTemplateId</a></code> | <code>*string</code> | Unique QueryTemplate ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Short description of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.documentation">Documentation</a></code> | <code>*string</code> | Documentation describing the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#id GoogleBigqueryAnalyticsHubQueryTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact">PrimaryContact</a></code> | <code>*string</code> | Email or URL of the primary point of contact of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#project GoogleBigqueryAnalyticsHubQueryTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.routine">Routine</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | routine block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.submit">Submit</a></code> | <code>interface{}</code> | If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId"></a>

```go
DataExchangeId *string
```

- *Type:* *string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#data_exchange_id GoogleBigqueryAnalyticsHubQueryTemplate#data_exchange_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human-readable display name of the QueryTemplate.

The display name must
contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
spaces ( ), ampersands (&) and can't start or end with spaces. Default
value is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#display_name GoogleBigqueryAnalyticsHubQueryTemplate#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The name of the location this data exchange query template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#location GoogleBigqueryAnalyticsHubQueryTemplate#location}

---

##### `QueryTemplateId`<sup>Required</sup> <a name="QueryTemplateId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId"></a>

```go
QueryTemplateId *string
```

- *Type:* *string

Unique QueryTemplate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#query_template_id GoogleBigqueryAnalyticsHubQueryTemplate#query_template_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#deletion_policy GoogleBigqueryAnalyticsHubQueryTemplate#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Short description of the QueryTemplate.

The description must not contain
Unicode non-characters and C0 and C1 control codes except tabs,
new lines, carriage returns, and page breaks.
Default value is an empty string. Max length: 2000 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#description GoogleBigqueryAnalyticsHubQueryTemplate#description}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.documentation"></a>

```go
Documentation *string
```

- *Type:* *string

Documentation describing the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#documentation GoogleBigqueryAnalyticsHubQueryTemplate#documentation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#id GoogleBigqueryAnalyticsHubQueryTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact"></a>

```go
PrimaryContact *string
```

- *Type:* *string

Email or URL of the primary point of contact of the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#primary_contact GoogleBigqueryAnalyticsHubQueryTemplate#primary_contact}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#project GoogleBigqueryAnalyticsHubQueryTemplate#project}.

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.routine"></a>

```go
Routine GoogleBigqueryAnalyticsHubQueryTemplateRoutine
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#routine GoogleBigqueryAnalyticsHubQueryTemplate#routine}

---

##### `Submit`<sup>Optional</sup> <a name="Submit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.submit"></a>

```go
Submit interface{}
```

- *Type:* interface{}

If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards.

This is a one-time action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#submit GoogleBigqueryAnalyticsHubQueryTemplate#submit}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleBigqueryAnalyticsHubQueryTemplateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#timeouts GoogleBigqueryAnalyticsHubQueryTemplate#timeouts}

---

### GoogleBigqueryAnalyticsHubQueryTemplateRoutine <a name="GoogleBigqueryAnalyticsHubQueryTemplateRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

&googlebigqueryanalyticshubquerytemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine {
	DefinitionBody: *string,
	RoutineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody">DefinitionBody</a></code> | <code>*string</code> | SQL query logic. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.routineType">RoutineType</a></code> | <code>*string</code> | Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"]. |

---

##### `DefinitionBody`<sup>Optional</sup> <a name="DefinitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody"></a>

```go
DefinitionBody *string
```

- *Type:* *string

SQL query logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#definition_body GoogleBigqueryAnalyticsHubQueryTemplate#definition_body}

---

##### `RoutineType`<sup>Optional</sup> <a name="RoutineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.routineType"></a>

```go
RoutineType *string
```

- *Type:* *string

Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#routine_type GoogleBigqueryAnalyticsHubQueryTemplate#routine_type}

---

### GoogleBigqueryAnalyticsHubQueryTemplateTimeouts <a name="GoogleBigqueryAnalyticsHubQueryTemplateTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

&googlebigqueryanalyticshubquerytemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#create GoogleBigqueryAnalyticsHubQueryTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#delete GoogleBigqueryAnalyticsHubQueryTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#update GoogleBigqueryAnalyticsHubQueryTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#create GoogleBigqueryAnalyticsHubQueryTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#delete GoogleBigqueryAnalyticsHubQueryTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_bigquery_analytics_hub_query_template#update GoogleBigqueryAnalyticsHubQueryTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference <a name="GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

googlebigqueryanalyticshubquerytemplate.NewGoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody">ResetDefinitionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType">ResetRoutineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinitionBody` <a name="ResetDefinitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody"></a>

```go
func ResetDefinitionBody()
```

##### `ResetRoutineType` <a name="ResetRoutineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType"></a>

```go
func ResetRoutineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput">DefinitionBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput">RoutineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody">DefinitionBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType">RoutineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionBodyInput`<sup>Optional</sup> <a name="DefinitionBodyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput"></a>

```go
func DefinitionBodyInput() *string
```

- *Type:* *string

---

##### `RoutineTypeInput`<sup>Optional</sup> <a name="RoutineTypeInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput"></a>

```go
func RoutineTypeInput() *string
```

- *Type:* *string

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody"></a>

```go
func DefinitionBody() *string
```

- *Type:* *string

---

##### `RoutineType`<sup>Required</sup> <a name="RoutineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType"></a>

```go
func RoutineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigqueryAnalyticsHubQueryTemplateRoutine
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---


### GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigqueryanalyticshubquerytemplate"

googlebigqueryanalyticshubquerytemplate.NewGoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



