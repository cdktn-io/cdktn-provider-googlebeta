# `googleArtifactRegistryProjectConfig` Submodule <a name="`googleArtifactRegistryProjectConfig` Submodule" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryProjectConfig <a name="GoogleArtifactRegistryProjectConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config google_artifact_registry_project_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleArtifactRegistryProjectConfig(Construct Scope, string Id, GoogleArtifactRegistryProjectConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig">GoogleArtifactRegistryProjectConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig">GoogleArtifactRegistryProjectConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig">PutPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetPlatformLogsConfig">ResetPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPlatformLogsConfig` <a name="PutPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig"></a>

```csharp
private void PutPlatformLogsConfig(GoogleArtifactRegistryProjectConfigPlatformLogsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putPlatformLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleArtifactRegistryProjectConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetPlatformLogsConfig` <a name="ResetPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetPlatformLogsConfig"></a>

```csharp
private void ResetPlatformLogsConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleArtifactRegistryProjectConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleArtifactRegistryProjectConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleArtifactRegistryProjectConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleArtifactRegistryProjectConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleArtifactRegistryProjectConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleArtifactRegistryProjectConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleArtifactRegistryProjectConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryProjectConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfig">PlatformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference">GoogleArtifactRegistryProjectConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfigInput">PlatformLogsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PlatformLogsConfig`<sup>Required</sup> <a name="PlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfig"></a>

```csharp
public GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference PlatformLogsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference">GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeouts"></a>

```csharp
public GoogleArtifactRegistryProjectConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference">GoogleArtifactRegistryProjectConfigTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PlatformLogsConfigInput`<sup>Optional</sup> <a name="PlatformLogsConfigInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.platformLogsConfigInput"></a>

```csharp
public GoogleArtifactRegistryProjectConfigPlatformLogsConfig PlatformLogsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleArtifactRegistryProjectConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryProjectConfigConfig <a name="GoogleArtifactRegistryProjectConfigConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleArtifactRegistryProjectConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Location = null,
    GoogleArtifactRegistryProjectConfigPlatformLogsConfig PlatformLogsConfig = null,
    string Project = null,
    GoogleArtifactRegistryProjectConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this config is located in. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.platformLogsConfig">PlatformLogsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | platform_logs_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#id GoogleArtifactRegistryProjectConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this config is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#location GoogleArtifactRegistryProjectConfig#location}

---

##### `PlatformLogsConfig`<sup>Optional</sup> <a name="PlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.platformLogsConfig"></a>

```csharp
public GoogleArtifactRegistryProjectConfigPlatformLogsConfig PlatformLogsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

platform_logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#platform_logs_config GoogleArtifactRegistryProjectConfig#platform_logs_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#project GoogleArtifactRegistryProjectConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigConfig.property.timeouts"></a>

```csharp
public GoogleArtifactRegistryProjectConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#timeouts GoogleArtifactRegistryProjectConfig#timeouts}

---

### GoogleArtifactRegistryProjectConfigPlatformLogsConfig <a name="GoogleArtifactRegistryProjectConfigPlatformLogsConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleArtifactRegistryProjectConfigPlatformLogsConfig {
    string LoggingState = null,
    string SeverityLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState">LoggingState</a></code> | <code>string</code> | The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel">SeverityLevel</a></code> | <code>string</code> | The severity level for the logs. |

---

##### `LoggingState`<sup>Optional</sup> <a name="LoggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.loggingState"></a>

```csharp
public string LoggingState { get; set; }
```

- *Type:* string

The state of the platform logs: enabled or disabled. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#logging_state GoogleArtifactRegistryProjectConfig#logging_state}

---

##### `SeverityLevel`<sup>Optional</sup> <a name="SeverityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig.property.severityLevel"></a>

```csharp
public string SeverityLevel { get; set; }
```

- *Type:* string

The severity level for the logs.

Logs will be generated if their
severity level is >= than the value of the severity level mentioned here. Possible values: ["DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#severity_level GoogleArtifactRegistryProjectConfig#severity_level}

---

### GoogleArtifactRegistryProjectConfigTimeouts <a name="GoogleArtifactRegistryProjectConfigTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleArtifactRegistryProjectConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#create GoogleArtifactRegistryProjectConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#delete GoogleArtifactRegistryProjectConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_artifact_registry_project_config#update GoogleArtifactRegistryProjectConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference <a name="GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState">ResetLoggingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel">ResetSeverityLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLoggingState` <a name="ResetLoggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetLoggingState"></a>

```csharp
private void ResetLoggingState()
```

##### `ResetSeverityLevel` <a name="ResetSeverityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.resetSeverityLevel"></a>

```csharp
private void ResetSeverityLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput">LoggingStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput">SeverityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState">LoggingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel">SeverityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingStateInput`<sup>Optional</sup> <a name="LoggingStateInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingStateInput"></a>

```csharp
public string LoggingStateInput { get; }
```

- *Type:* string

---

##### `SeverityLevelInput`<sup>Optional</sup> <a name="SeverityLevelInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevelInput"></a>

```csharp
public string SeverityLevelInput { get; }
```

- *Type:* string

---

##### `LoggingState`<sup>Required</sup> <a name="LoggingState" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.loggingState"></a>

```csharp
public string LoggingState { get; }
```

- *Type:* string

---

##### `SeverityLevel`<sup>Required</sup> <a name="SeverityLevel" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.severityLevel"></a>

```csharp
public string SeverityLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleArtifactRegistryProjectConfigPlatformLogsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigPlatformLogsConfig">GoogleArtifactRegistryProjectConfigPlatformLogsConfig</a>

---


### GoogleArtifactRegistryProjectConfigTimeoutsOutputReference <a name="GoogleArtifactRegistryProjectConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleArtifactRegistryProjectConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleArtifactRegistryProjectConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleArtifactRegistryProjectConfig.GoogleArtifactRegistryProjectConfigTimeouts">GoogleArtifactRegistryProjectConfigTimeouts</a>

---



