# `googleLoggingSavedQuery` Submodule <a name="`googleLoggingSavedQuery` Submodule" id="@cdktn/provider-google-beta.googleLoggingSavedQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingSavedQuery <a name="GoogleLoggingSavedQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query google_logging_saved_query}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQuery(Construct Scope, string Id, GoogleLoggingSavedQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig">GoogleLoggingSavedQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig">GoogleLoggingSavedQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery">PutLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery">PutOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery">ResetLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery">ResetOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingQuery` <a name="PutLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery"></a>

```csharp
private void PutLoggingQuery(GoogleLoggingSavedQueryLoggingQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putLoggingQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `PutOpsAnalyticsQuery` <a name="PutOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery"></a>

```csharp
private void PutOpsAnalyticsQuery(GoogleLoggingSavedQueryOpsAnalyticsQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putOpsAnalyticsQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleLoggingSavedQueryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoggingQuery` <a name="ResetLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetLoggingQuery"></a>

```csharp
private void ResetLoggingQuery()
```

##### `ResetOpsAnalyticsQuery` <a name="ResetOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetOpsAnalyticsQuery"></a>

```csharp
private void ResetOpsAnalyticsQuery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleLoggingSavedQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleLoggingSavedQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleLoggingSavedQuery.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleLoggingSavedQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleLoggingSavedQuery resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingSavedQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingSavedQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleLoggingSavedQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery">LoggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery">OpsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput">LoggingQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput">OpsAnalyticsQueryInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `LoggingQuery`<sup>Required</sup> <a name="LoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQuery"></a>

```csharp
public GoogleLoggingSavedQueryLoggingQueryOutputReference LoggingQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference">GoogleLoggingSavedQueryLoggingQueryOutputReference</a>

---

##### `OpsAnalyticsQuery`<sup>Required</sup> <a name="OpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQuery"></a>

```csharp
public GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference OpsAnalyticsQuery { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference">GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeouts"></a>

```csharp
public GoogleLoggingSavedQueryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference">GoogleLoggingSavedQueryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingQueryInput`<sup>Optional</sup> <a name="LoggingQueryInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.loggingQueryInput"></a>

```csharp
public GoogleLoggingSavedQueryLoggingQuery LoggingQueryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpsAnalyticsQueryInput`<sup>Optional</sup> <a name="OpsAnalyticsQueryInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.opsAnalyticsQueryInput"></a>

```csharp
public GoogleLoggingSavedQueryOpsAnalyticsQuery OpsAnalyticsQueryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleLoggingSavedQueryTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingSavedQueryConfig <a name="GoogleLoggingSavedQueryConfig" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Location,
    string Name,
    string Parent,
    string Visibility,
    string DeletionPolicy = null,
    string Description = null,
    string Id = null,
    GoogleLoggingSavedQueryLoggingQuery LoggingQuery = null,
    GoogleLoggingSavedQueryOpsAnalyticsQuery OpsAnalyticsQuery = null,
    GoogleLoggingSavedQueryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-visible display name of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions). |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name">Name</a></code> | <code>string</code> | The name of the saved query. For example: 'my-saved-query'. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility">Visibility</a></code> | <code>string</code> | The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description">Description</a></code> | <code>string</code> | A description of the saved query. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery">LoggingQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | logging_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery">OpsAnalyticsQuery</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | ops_analytics_query block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-visible display name of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#display_name GoogleLoggingSavedQuery#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource see [supported regions](https://docs.cloud.google.com/logging/docs/region-support#bucket-regions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#location GoogleLoggingSavedQuery#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the saved query. For example: 'my-saved-query'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#name GoogleLoggingSavedQuery#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#parent GoogleLoggingSavedQuery#parent}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The visibility of the saved query. Possible values: ["SHARED", "PRIVATE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#visibility GoogleLoggingSavedQuery#visibility}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#deletion_policy GoogleLoggingSavedQuery#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the saved query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#description GoogleLoggingSavedQuery#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#id GoogleLoggingSavedQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoggingQuery`<sup>Optional</sup> <a name="LoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.loggingQuery"></a>

```csharp
public GoogleLoggingSavedQueryLoggingQuery LoggingQuery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

logging_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#logging_query GoogleLoggingSavedQuery#logging_query}

---

##### `OpsAnalyticsQuery`<sup>Optional</sup> <a name="OpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.opsAnalyticsQuery"></a>

```csharp
public GoogleLoggingSavedQueryOpsAnalyticsQuery OpsAnalyticsQuery { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

ops_analytics_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#ops_analytics_query GoogleLoggingSavedQuery#ops_analytics_query}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryConfig.property.timeouts"></a>

```csharp
public GoogleLoggingSavedQueryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#timeouts GoogleLoggingSavedQuery#timeouts}

---

### GoogleLoggingSavedQueryLoggingQuery <a name="GoogleLoggingSavedQueryLoggingQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryLoggingQuery {
    string Filter,
    double SummaryFieldEnd = null,
    IResolvable|GoogleLoggingSavedQueryLoggingQuerySummaryFields[] SummaryFields = null,
    double SummaryFieldStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter">Filter</a></code> | <code>string</code> | An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd">SummaryFieldEnd</a></code> | <code>double</code> | Characters will be counted from the end of the string. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields">SummaryFields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | summary_fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart">SummaryFieldStart</a></code> | <code>double</code> | Characters will be counted from the start of the string. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

An [advanced logs filter](https://cloud.google.com/logging/docs/view/advanced-filters) which is used to match log entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#filter GoogleLoggingSavedQuery#filter}

---

##### `SummaryFieldEnd`<sup>Optional</sup> <a name="SummaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldEnd"></a>

```csharp
public double SummaryFieldEnd { get; set; }
```

- *Type:* double

Characters will be counted from the end of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#summary_field_end GoogleLoggingSavedQuery#summary_field_end}

---

##### `SummaryFields`<sup>Optional</sup> <a name="SummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFields"></a>

```csharp
public IResolvable|GoogleLoggingSavedQueryLoggingQuerySummaryFields[] SummaryFields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]

summary_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#summary_fields GoogleLoggingSavedQuery#summary_fields}

---

##### `SummaryFieldStart`<sup>Optional</sup> <a name="SummaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery.property.summaryFieldStart"></a>

```csharp
public double SummaryFieldStart { get; set; }
```

- *Type:* double

Characters will be counted from the start of the string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#summary_field_start GoogleLoggingSavedQuery#summary_field_start}

---

### GoogleLoggingSavedQueryLoggingQuerySummaryFields <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryLoggingQuerySummaryFields {
    string Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field">Field</a></code> | <code>string</code> | The field from the LogEntry to include in the summary line. |

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

The field from the LogEntry to include in the summary line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#field GoogleLoggingSavedQuery#field}

---

### GoogleLoggingSavedQueryOpsAnalyticsQuery <a name="GoogleLoggingSavedQueryOpsAnalyticsQuery" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryOpsAnalyticsQuery {
    string SqlQueryText
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText">SqlQueryText</a></code> | <code>string</code> | A logs analytics SQL query, which generally follows BigQuery format. |

---

##### `SqlQueryText`<sup>Required</sup> <a name="SqlQueryText" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery.property.sqlQueryText"></a>

```csharp
public string SqlQueryText { get; set; }
```

- *Type:* string

A logs analytics SQL query, which generally follows BigQuery format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#sql_query_text GoogleLoggingSavedQuery#sql_query_text}

---

### GoogleLoggingSavedQueryTimeouts <a name="GoogleLoggingSavedQueryTimeouts" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#create GoogleLoggingSavedQuery#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#delete GoogleLoggingSavedQuery#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_logging_saved_query#update GoogleLoggingSavedQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingSavedQueryLoggingQueryOutputReference <a name="GoogleLoggingSavedQueryLoggingQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryLoggingQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields">PutSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd">ResetSummaryFieldEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields">ResetSummaryFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart">ResetSummaryFieldStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSummaryFields` <a name="PutSummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields"></a>

```csharp
private void PutSummaryFields(IResolvable|GoogleLoggingSavedQueryLoggingQuerySummaryFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.putSummaryFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]

---

##### `ResetSummaryFieldEnd` <a name="ResetSummaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldEnd"></a>

```csharp
private void ResetSummaryFieldEnd()
```

##### `ResetSummaryFields` <a name="ResetSummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFields"></a>

```csharp
private void ResetSummaryFields()
```

##### `ResetSummaryFieldStart` <a name="ResetSummaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.resetSummaryFieldStart"></a>

```csharp
private void ResetSummaryFieldStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields">SummaryFields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput">SummaryFieldEndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput">SummaryFieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput">SummaryFieldStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd">SummaryFieldEnd</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart">SummaryFieldStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SummaryFields`<sup>Required</sup> <a name="SummaryFields" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFields"></a>

```csharp
public GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList SummaryFields { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList">GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `SummaryFieldEndInput`<sup>Optional</sup> <a name="SummaryFieldEndInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEndInput"></a>

```csharp
public double SummaryFieldEndInput { get; }
```

- *Type:* double

---

##### `SummaryFieldsInput`<sup>Optional</sup> <a name="SummaryFieldsInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldsInput"></a>

```csharp
public IResolvable|GoogleLoggingSavedQueryLoggingQuerySummaryFields[] SummaryFieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]

---

##### `SummaryFieldStartInput`<sup>Optional</sup> <a name="SummaryFieldStartInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStartInput"></a>

```csharp
public double SummaryFieldStartInput { get; }
```

- *Type:* double

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `SummaryFieldEnd`<sup>Required</sup> <a name="SummaryFieldEnd" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldEnd"></a>

```csharp
public double SummaryFieldEnd { get; }
```

- *Type:* double

---

##### `SummaryFieldStart`<sup>Required</sup> <a name="SummaryFieldStart" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.summaryFieldStart"></a>

```csharp
public double SummaryFieldStart { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQueryOutputReference.property.internalValue"></a>

```csharp
public GoogleLoggingSavedQueryLoggingQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuery">GoogleLoggingSavedQueryLoggingQuery</a>

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get"></a>

```csharp
private GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleLoggingSavedQueryLoggingQuerySummaryFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>[]

---


### GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference <a name="GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetField` <a name="ResetField" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleLoggingSavedQueryLoggingQuerySummaryFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryLoggingQuerySummaryFields">GoogleLoggingSavedQueryLoggingQuerySummaryFields</a>

---


### GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference <a name="GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput">SqlQueryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText">SqlQueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SqlQueryTextInput`<sup>Optional</sup> <a name="SqlQueryTextInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryTextInput"></a>

```csharp
public string SqlQueryTextInput { get; }
```

- *Type:* string

---

##### `SqlQueryText`<sup>Required</sup> <a name="SqlQueryText" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.sqlQueryText"></a>

```csharp
public string SqlQueryText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQueryOutputReference.property.internalValue"></a>

```csharp
public GoogleLoggingSavedQueryOpsAnalyticsQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryOpsAnalyticsQuery">GoogleLoggingSavedQueryOpsAnalyticsQuery</a>

---


### GoogleLoggingSavedQueryTimeoutsOutputReference <a name="GoogleLoggingSavedQueryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleLoggingSavedQueryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleLoggingSavedQueryTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleLoggingSavedQuery.GoogleLoggingSavedQueryTimeouts">GoogleLoggingSavedQueryTimeouts</a>

---



